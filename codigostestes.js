class CriaImagem{
    constructor(){
        this.para = document.querySelector('#Passa');
        this.div = document.querySelector('#Um');
        this.imagem = document.createElement("img");
        this.div.appendChild(this.imagem);
        const a =["fotocircuito.jpg","meu site.jpg"] ;
        let i = 0;
        this.para.addEventListener('mouseenter',evento=>{
            console.log("FALA");
            setInterval(function(){
                this.img = document.querySelector('img');
                this.img.src = a[i];
                if(i==0){i=1}else{i=0};
            },3000);
            

        });
    }
}

let cimagem = new CriaImagem();