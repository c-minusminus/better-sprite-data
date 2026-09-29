namespace sprites {
    let last: any[] = []

    /**
     * Returns the last value returned by a sprite function
     */
    //% blockId=spritDataLastReturned block="sprite function last returned"
    //% group="Data"
    //% weight=7
    //% blockGap=8
    export function lastReturned(): any[] {
        return last
    }

    /**
     * Return a value in a sprite function
     */
    //% blockId=spritDataReturn block="return $ret"
    //% ret.shadow=lists_create_with
    //% group="Data"
    //% weight=7
    //% blockGap=8
    export function returnValue(ret: any[]) {
        last = ret
    }

    /**
     * Sets a function in the data of a sprite
     */
    //% blockId=spriteDataSetFunction block="set $sprite=variables_get data $name to function"
    //% name.shadow="spriteDataFunctionNameShadow"
    //% group="Data"
    //% weight=8
    //% handlerStatement=1
    //% draggableParameters=reporter
    //% blockGap=8
    export function setDataFunction(sprite: Sprite, name: string, value: (parameters: any[]) => any) {
        if (!sprite || !name) return
        const d = sprite.data
        d[name] = value
    }

    /**
     * Runs a function in the data of a sprite
     */
    //% blockId=spriteDataRunFunction block="run $sprite=variables_get data $name with $parameters"
    //% name.shadow="spriteDataFunctionNameShadow"
    //% parameters.shadow=lists_create_with
    //% group="Data"
    //% weight=8
    //% blockGap=8
    export function runDataFunction(sprite: Sprite, name: string, parameters: any[]) {
        if (!sprite || !name) return
        const e = sprite.data
        e[name](parameters)
    }

    //% block="$name"
    //% blockId=spriteDataFunctionNameShadow
    //% blockHidden=true shim=TD_ID
    //% name.fieldEditor="autocomplete" name.fieldOptions.decompileLiterals=true
    //% name.fieldOptions.key="spritedatafunction"
    export function _functionNameShadow(name: string) {
        return name
    }
}