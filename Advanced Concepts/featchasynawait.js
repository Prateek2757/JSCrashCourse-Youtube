fetch('https:www.google.com')
.then(res => res.text())
//.then(data =>console.log(data))


async function fetchdata() {
    let res = await fetch('https:www.google.com');
    let data = await res.text();

   console.log(data);
}
fetchdata();