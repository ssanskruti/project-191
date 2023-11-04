AFRAME.registerComponent("create-map",{
    init:function(){
        this.createMap()
    },
   createMap:function(){
    var scene=document.querySelector("#scene")

    var map=document.createElement("a-entity")
        map.setAttribute("id","map")
        map.setAttribute("position",{x:0,y:0,z:0})
        map.setAttribute("gltf-model", "assets/map/scene.gltf")
        map.setAttribute("scale",{x:25,y:25,z:25})
        map.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        map.setAttribute("visible",true)
        
        scene.appendChild(map)
    }
        
})