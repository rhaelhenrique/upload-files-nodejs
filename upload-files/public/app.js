const btnPdfLoad = document.getElementById("btn-load-pdf")

//Processamento da entrada por PDF
const inputFile = document.getElementById("input-file")

btnPdfLoad.addEventListener("click", () => {
  
    const formData = new FormData()
  
    const FileList = inputFile.files
  
    console.log(FileList.length);
  
    for (i = 0; i < FileList.length; i++) {
      key = 'pdfFile' + i
      formData.append(key, inputFile.files[i])

      fetch("/extract-text", {
        method: "post",
        body: formData,
      }).then((response) => {
        console.log(response.text);
          //return response.text()
        //}).then((extractedText) => {
            //resultList.value = extractedText.trim()

          //resultText.value = extractedText.trim()
    
          //Debug
          //let str = extractedText.trim()
          //console.log(str)
          //getResponseTxt('pdf')
        })

    }
     
  })