const xhrid = document.getElementById('xhrid')
const b01 = document.getElementById('b01')
const head01 = document.getElementById('head01')
const h1 = document.createElement('h1')
h1.innerHTML = `HTTP - XMLHTTP - Request`
h1.style.backgroundColor = 'rgb(248, 149, 165)',h1.style.textAlign ='center',h1.style.padding ='10px',h1.style.color='white'

b01.style.backgroundColor ='rgb(166, 87, 100)';

head01.append(h1)

// h01.innerHTML ='<strong class="text-white"> HTTP - XMLHTTPS - Request</strong>';
let baseUrl =`https://jsonplaceholder.typicode.com`

let comments = `${baseUrl}/comments`

const templating =(arr)=>{
   let result = '';
   arr.forEach(ele => {
    result += `
    <div class="card mt-5 mb-4">
            <div class="card-header text-center">
              <h2>
             ${ele.name}
              </h2>

              <div class="card-body">
                <p>
                ${ele.body}
                </p>
              <div class="card-footer d-flex justify-content-between">
              <button class="btn btn-danger font-weight-bold">
              Delete
              </button>
              <button class="btn btn-primary font-weight-bold">
              Edit
              </button>
              </div>
              </div>
            </div>
          </div>
    
          `
        });
        xhrid.innerHTML = result
        xhrid.style.backgroundColor = 'black'
}

let xhr = new XMLHttpRequest();

xhr.open('GET',comments,true)  

xhr.send(); 

xhr.onload = function()
{
    if(xhr.status ===200)
    {
        console.log(xhr.response);
        let data = JSON.parse(xhr.response)
        console.log(data);
        Swal.fire({
            icon:'success',
            text:'HTTPS-Request is Accepted',
            title:'HI, WELCOME',
            timer:2000
        })
        templating(data)
    }
    else
    {
        Swal.fire({
            icon:'error',
            text:'HTTPS-Request is Rejected',
            title:'Try After Sometime',
            timer:2000
        })
    }
}

