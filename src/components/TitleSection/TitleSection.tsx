import { AppProps, FetchTitle } from '../../types/types';
import { ImageContainer, Section } from './TitleSection.styles';

interface TitleGrouped extends AppProps {
    title: FetchTitle;
}

export const TitleSection: React.FC<TitleGrouped> = (title) => {
    return (
        <Section>
            <ImageContainer>
                <img src={`${title.title.data.image_url}`} alt="titleImage" />
            </ImageContainer>
        </Section>
    );
};
