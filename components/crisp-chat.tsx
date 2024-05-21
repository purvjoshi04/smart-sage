"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() =>{
        Crisp.configure("304ca318-7f1c-49ce-ad8b-e87d6cac4e0d")
    })

    return null;
}