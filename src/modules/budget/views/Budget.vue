<script setup lang="ts">
import Papa from "papaparse";
import supabase from "@/plugins/supabase";

const csvUpload = ref<File | null>(null);
const uploading = ref(false);

function handleUpload() {
  if (!csvUpload.value || uploading.value) return;

  Papa.parse(csvUpload.value, {
    header: true,
    skipEmptyLines: true,
    complete: async (results) => {
      const cleanTransactions = results.data.map((t: any) => ({
        "Account Number": t["Account Number"] ?? "",
        "Post Date": t["Post Date"] ?? "",
        Check: t["Check"] ?? "",
        Description: t["Description"] ?? "",
        Debit: t["Debit"] ?? "0",
        Credit: t["Credit"] ?? "0",
        Status: t["Status"] ?? "",
        Balance: t["Balance"] ?? "0",
        Classification: t["Classification"] ?? "",
      }));

      try {
        const { error } = await supabase.rpc("insert_transactions", {
          json_data: cleanTransactions,
        });

        if (error) {
          console.error("Supabase error:", error);
          alert("Upload failed: " + error.message);
          return;
        }

        csvUpload.value = null;
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    },
  });
}
</script>

<template>
  <div>Budget View</div>
  <div class="csv-upload">
    <QFile
      standout
      bg-color="grey-3"
      color="black"
      label-color="black"
      v-model="csvUpload"
      label="Add CSV"
      class="csv-upload-file"
    />
    <AppButton @click="handleUpload">Upload</AppButton>
  </div>
</template>

<style lang="scss" scoped>
.csv-upload {
  display: flex;

  &-file {
    margin-right: 1rem;
  }
}
</style>
