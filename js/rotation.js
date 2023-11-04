AFRAME.registerComponent("rotate-terrain",{
    schema:{
        rotationS:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(x)=>{
            if(x.key==="ArrowLeft"){
                if(this.data.rotationS<0.1){
                    this.data.rotationS+=0.01
                }
            }
            if(x.key==="ArrowRight"){
                if(this.data.rotationS>-0.1){
                    this.data.rotationS-=0.01
                }
            }

        var rotation=this.el.getAttribute("rotation")
        rotation.y+=this.data.rotationS
        this.el.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z})
        })
    },
    tick:function(){
        
    }
})