import { useEffect } from "react";
import { Meni2 } from "../components/Meni2"
import { HeroOther } from '../components/HeroOther';
import ServiceImg from '../../assets/53.jpg';

export const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>

            <HeroOther
                heroImg={ServiceImg}
                title="Meni" />
            <Meni2 />

        </>

    )
}
