import { AppProps, FetchTitle } from '../../../../types/types';
import { ImageContainer, InfoContainer, Section } from './TitleSection.styles';

interface TitleGrouped extends AppProps {
    title: FetchTitle;
}

export const TitleSection: React.FC<TitleGrouped> = ({ title }) => {
    console.log(title);
    return (
        <Section>
            <ImageContainer>
                <img src={`${title.data.image_url}`} alt="titleImage" />
            </ImageContainer>
            <InfoContainer>
                <p>{title.data.synopsis}</p>
            </InfoContainer>
        </Section>
    );
};
