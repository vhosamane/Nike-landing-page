import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
    return (
        <section className="max-container flex justify-wrap items-center max-xl:flex-col-reverse">
            <div className="flex-1">
                <img src={offer} width={775} height={685} className="object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special</span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Embark on a shopping journey that redefines your 
                    experience with unbeatable deals. From premier selection 
                    to incredible savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Navigate a realm of possobilities dessigned to fulfill your unique 
                    desires, surpassing the loftiest expectations. Your Journey
                    with us is nothing short of exceptional.
                </p>
                <div className="my-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconURL={ arrowRight } />
                    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer;
