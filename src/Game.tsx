import React, { } from "react";
import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";

import Mesh from "./Mesh";

export default function Game() {
    return <Engine antialias adaptToDeviceRatio>
        <Scene>
            <freeCamera name="main_camera"
                position={new Vector3(0, 5, -10)}
                setTarget={[Vector3.Zero()]} />

            <hemisphericLight name="light1"
                direction={Vector3.Up()} />

            <Mesh />

            <ground name="ground"
                width={6} height={6}
                subdivisions={2} />
        </Scene>
    </Engine>
}