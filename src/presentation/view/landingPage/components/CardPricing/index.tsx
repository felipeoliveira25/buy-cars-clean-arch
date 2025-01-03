import { ButtonCard, CardContainer, CardPrice, CardTitle, ContainerInfo, ContainerInfoText, ItemCard, ItensCard } from "./styles"

interface CardPricingProps {
    title: string;
    price: string;
    itens: string[];
    infoText: string;
}

export const CardPricing = ({title, price, itens, infoText}: CardPricingProps) => {
    return(
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardPrice>{price}</CardPrice>
            <ItensCard>
                {itens?.map((item) => (
                    <ItemCard key={item}>{item}</ItemCard>
                ))}
                
            </ItensCard>
            <ContainerInfo>
                <ContainerInfoText>{infoText}</ContainerInfoText>
            </ContainerInfo>
            <ButtonCard>Learn More</ButtonCard>
        </CardContainer>
    )
}