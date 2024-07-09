const bod = document.querySelector('#main');   //CSS DOM Manipulation
bod.style.backgroundColor='#36454F';
const hd = document.querySelector('h1');
hd.style.textAlign='center';
hd.style.color='#FFD700';
const form = document.querySelector('form');
form.style.textAlign='center';
const button = document.querySelector('button');
button.style.color='#191970';

form.addEventListener('submit',async(e)=>{  //Api headers clean, data in form of application/json
    e.preventDefault(); 
    const container = document.createElement('div');
    document.body.append(container); 
    const val = form.elements.search.value;
    console.log(val);
    const linke = `https://api.tvmaze.com/search/shows?q=${val}`;
    try{
        const info = await axios.get(linke);
        console.log(info.data);
        for(let nom of info.data)
        {
            if(nom.show.image.medium && nom.show.name)
            {
                const img = nom.show.image.medium;
                const image = document.createElement('IMG');
                image.src=img;
                const name= nom.show.name;
                const cont1 = document.createElement('div');
                const cont2 = document.createElement('div');
                const novcontainer = document.createElement('div');
                const text = document.createElement('span');
                text.innerText=name;
                cont1.append(image);
                cont2.append(text);
                cont2.style.textAlign='center'
                novcontainer.append(cont1); novcontainer.append(cont2);
                novcontainer.style.display='flex';
                novcontainer.style.flexDirection='column';
                text.style.color='#FFD700';
                container.append(novcontainer);
                container.style.display='flex';
                container.style.flexDirection='row';
            }
        }
    }
    catch(err){
        console.log("Error: ",err.value);
    }
})

const search = document.querySelector('input'); 
search.addEventListener('click',()=>{
    form.reset();
})
