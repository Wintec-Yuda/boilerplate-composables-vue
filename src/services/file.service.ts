// services/file.service.ts
export function uploadFiles(files: File[]) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(files.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size,
        preview: URL.createObjectURL(file),
      })))
    }, 1000)
  })
}
