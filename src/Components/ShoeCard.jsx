const ShoeCard = ({imgURL, bigShoeImg, changeBigShoeImage}) => {

    const handleImgClick = () => {
        if(bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    return (
        <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cusrsor-pointer max-sm:flex-1`} onClick={handleImgClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 cursor-pointer">
                <img src={imgURL.thumbnail} alt="Shoe Collection" width={130} height={105} className="object-contain" />
            </div>
        </div>
    )
}

export default ShoeCard
