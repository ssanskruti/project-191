AFRAME.registerComponent("collide-map",{
    update:function(){
        this.checkCollision()
    },
    init:function(){
        dragon=document.querySelector("#player")
        dragon.addEventListener("collide",(x)=>{
            console.log("collided")
            if(x.detail.body.el.id=="map"){
                scene=document.querySelector("#scene")
                tower=document.querySelector("#tower")
                tower.setAttribute("visible",false)

                city=document.querySelector("#cityModel")
                city.setAttribute("visible",true)

                map=document.querySelector("#mapContainer")
                // map.setAttribute("visible",false)

                var mapEl=x.detail.body.el
                mapEl.setAttribute("visible",false)

                // environmentComponent=document.createElement("a-entity")
                // environmentComponent.setAttribute("environment","preset:forest;skyType:gradient; lighting:point")
                // scene.appendChild(environmentComponent)
                // scene.setAttribute("position",{x:0,y:-10,z:-50})
            }
        }) 
    },
    checkCollision:function(){
        map=document.querySelector("#map")
        map.addEventListener("collide",x=>{
            console.log("collided")
        })
    }
})