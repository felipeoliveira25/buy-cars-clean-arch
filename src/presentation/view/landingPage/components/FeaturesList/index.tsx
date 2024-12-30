import { CardFeature } from "./CardFeature"
import { ContainerListFeatures } from "./styles"
import ImgData from "@/assets/img-data.svg"
import ImgGraph from "@/assets/img-graph.svg"
import ImgScreen from "@/assets/img-screen.svg"

export const FeaturesList = () => {

    const features = [
        {
            id: 1,
            urlImg: ImgData,
            title: "Data Visualization",
            desc: "The ability to present complex data in a visually understandable way, such as through charts."
        },
        {
            id: 2,
            urlImg: ImgScreen,
            title: "Integration",
            desc: "Seamless integration with other software and tools that a business uses, creating a unified system"
        },
        {
            id: 3,
            urlImg: ImgGraph,
            title: "Customization",
            desc: "Allowing users to tailor the dashboard to their specific needs and preferences."
        },
        {
            id: 4,
            urlImg: ImgData,
            title: "Reporting",
            desc: "Generating detailed reports that provide insights into the business's performance."
        },
        {
            id: 5,
            urlImg: ImgScreen,
            title: "User Access Control",
            desc: "Managing who can access and interact with the dashboard, ensuring data security."
        },
        {
            id: 6,
            urlImg: ImgGraph,
            title: "Collaboration Tools",
            desc: "Features that facilitate teamwork and communication among team members."
        },
    ]
    return(
        <ContainerListFeatures>
            {features.map((feature) => (
                <CardFeature
                    key={feature.id}
                    urlImage={feature.urlImg}
                    title={feature.title}
                    description={feature.desc}
                />
            ))}
        </ContainerListFeatures>
    )
}