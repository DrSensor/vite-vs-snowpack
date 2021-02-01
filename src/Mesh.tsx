import React, { useState } from "react";
import { useClick } from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";

export default function Mesh() {
    const [color, setColor] = useState(Color3.Random())
    const [ref] = useClick(_ => {
        setColor(Color3.Random())
    })

    return <sphere name="ball" ref={ref}
        position={Vector3.Up()}
        diameter={2} segments={32}
    >
        <standardMaterial name="mat" diffuseColor={color} />

    </sphere>

}