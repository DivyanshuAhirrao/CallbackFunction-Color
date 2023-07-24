const javascript = ()=>{
    let x = async function(){
    try {
        let data = await fetch("data.json");
        let finaldata = await data.json();
        console.log(finaldata);

        finaldata.map((x)=> {
            let body = document.body
            let Section = document.createElement("section")
            Section.innerHTML += `
                 <div class="cards"> 

                     <p> '${x.pid}' </p>
                     <p> '${x.pname}' </p>
                     <p> '${x.pcity}' </p>
                     <p> '${x.page}' </p>

                 </div> 
            `
            body.appendChild(Section)
        })
    }
    catch (error) {
        console.log('error');
    }
}
x();
}

