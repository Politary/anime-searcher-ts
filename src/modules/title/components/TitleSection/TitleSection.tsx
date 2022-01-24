import { ImageContainer, InfoContainer, Section } from './TitleSection.styles';
import { TitleObject } from '../../../../types/titleTypes';

export const TitleSection: React.FC<Partial<TitleObject>> = ({
    images,
    synopsis,
}) => {
    return (
        <Section>
            <ImageContainer>
                <img src={`${images?.jpg.image_url}`} alt="titleImage" />
            </ImageContainer>
            <InfoContainer>
                <p>{synopsis}</p>
            </InfoContainer>
        </Section>
    );
};
