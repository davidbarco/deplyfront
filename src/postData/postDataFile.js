		// Ejemplo implementando el metodo POST:
        async function postDataFile(url = '', data = {}) {

          //console.log("response", data)
            // Opciones por defecto estan marcadas con un *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE0LCJuYW1lIjoiYW5pdGFzIiwic3VybmFtZSI6Imh1cnRhZG8iLCJlbWFpbCI6ImFuaXRhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImltYWdlIjoiU0JYRXNlZVBfbjk0UUxiTzcxUmxNN1h3LnBuZyIsImlhdCI6MTY1MTk0MDQ5OSwiZXhwIjoxNjU0NTMyNDk5fQ.Z1TmamMlvmPpw6Vjg85UIUzt83_nD0kTEJzdGdJEA34",
                'Content-Type': 'multipart/form-data'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            
            return response.json(); // parses JSON response into native JavaScript objects
          }

          export default postDataFile;