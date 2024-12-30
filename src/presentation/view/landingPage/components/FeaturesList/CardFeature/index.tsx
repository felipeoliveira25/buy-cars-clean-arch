import { CardFeatureContainer, CardFeatureDescription, CardFeatureImage, CardFeatureTitle } from "./styles"

interface CardFeatureProps {
    urlImage: string;
    title: string;
    description: string;
}

export const CardFeature = ({urlImage, title, description}: CardFeatureProps) => {
    return(
        <CardFeatureContainer>
            <CardFeatureImage width={110} height={110} src={urlImage} alt=""/>
            <CardFeatureTitle>{title}</CardFeatureTitle>
            <CardFeatureDescription>{description}</CardFeatureDescription>
        </CardFeatureContainer>
    )
}