import { TitleDetails } from '../../../../types/types';
import { ImageContainer, InfoContainer, Section } from './TitleSection.styles';

interface titleGrouped {
    title: Partial<TitleDetails>;
}

export const TitleSection = ({ title }: titleGrouped) => {
    return (
        <Section>
            <ImageContainer>
                <img src={`${title.images?.jpg.image_url}`} alt="titleImage" />
            </ImageContainer>
            <InfoContainer>
                <p>{title.synopsis}</p>
            </InfoContainer>
        </Section>
    );
};
