AFRAME.registerComponent("player-movement",{
 schema:{
    rotation:{type:"number",default:0},
    position:{type:"number",default:0}
 },
 init:function(){
    window.addEventListener("keydown",(y)=>{
        this.data.rotation=this.el.getAttribute("rotation")
        this.data.position=this.el.getAttribute("position")
        var pos=this.data.position
        var rot=this.data.rotation

        
        if(y.key==="ArrowUp"){
            if(rot.y<50){
                rot.y+=0.5
                this.el.setAttribute("rotation",rot)
            }
            if(pos.y<10){
                pos.y+=0.5
                this.el.setAttribute("position",pos)
            }
        }
        if(y.key==="ArrowDown"){
            if(rot.z>-10){
                rot.z-=0.5
                this.el.setAttribute("rotation",rot)
            }
            if(pos.y>-30){
                pos.y-=0.5
                this.el.setAttribute("position",pos)
            }
        }
    })
 },
})