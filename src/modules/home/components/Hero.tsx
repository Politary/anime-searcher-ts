import { HeroContainer, Tools } from './Hero.styles';

export const Hero: React.FC<any> = ({ title }) => {
    if (title.status === 'loaded')
        //@ts-ignore
        return (
            <HeroContainer image={title.data.trailer.images.maximum_image_url}>
                <div>
                    <h2>{title.data.title}</h2>
                    <div>
                        <span>{title.data.type}</span>
                        <span>
                            {title.data.duration}
                            {title.data.type === 'TV' ? '/ep' : null}
                        </span>
                        <Tools>
                            <button>Watch now</button>
                            <div>***</div>
                            <div> {'< >'} </div>
                        </Tools>
                    </div>
                </div>
            </HeroContainer>
        );
    if (title.status === 'idle') return <div />;
    if (title.status === 'loading') return <div>Loading</div>;
    if (title.status === 'error') return <div>Something went wrong</div>;
    else return null;
};
