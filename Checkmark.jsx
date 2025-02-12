// Исправил страницу с modelInfo

// Не знаю как правильно прописывается алгоритм на ангуляре, но в реакте использую
// состояние для отображения знаков.

const FileUpload = () => {
   const [fileUploaded, setFileUploaded] = React.useState(false)

   const handleFileChange = (event) => {
      const file = event.target.files[0]
      if (file) {
         setFileUploaded(true)
      } else {
         setFileUploaded(false)
      }
   }

   return (
      <React.Fragment>
         <input onChange={handleFileChange} type="file" required />
         {fileUploaded && (
            <div class="checkmark" id="checkmark">
               &#10003;
            </div>
         )}
      </React.Fragment>
   )
}
