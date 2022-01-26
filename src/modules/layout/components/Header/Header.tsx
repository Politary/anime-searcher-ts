import { CustomLink } from '../CustomLink/CustomLink';
import { HeaderBody, HeaderLink, HeaderLinkContainer } from './Header.styles';
//@ts-ignore
import { ReactComponent as Logo } from '../../../../assets/images/svg/Logo.svg';
//@ts-ignore
import { ReactComponent as Search } from '../../../../assets/images/svg/search.svg';
//@ts-ignore
import { ReactComponent as HomeActive } from '../../../../assets/images/svg/home-active.svg';
//@ts-ignore
import { ReactComponent as Home } from '../../../../assets/images/svg/home.svg';
//@ts-ignore
import { ReactComponent as PlayCircle } from '../../../../assets/images/svg/play-circle.svg';
//@ts-ignore
import { ReactComponent as PlayCircleActive } from '../../../../assets/images/svg/play-circle-active.svg';
//@ts-ignore
import { ReactComponent as HeartOutlined } from '../../../../assets/images/svg/heart-outlined.svg';
//@ts-ignore
import { ReactComponent as HeartActive } from '../../../../assets/images/svg/heart-active.svg';
import { useMatch } from 'react-router-dom';

export const Header = () => {
    const homeTo = '/';
    const homeMatch = useMatch(homeTo as string);
    const animesTo = '/animes';
    const animesMatch = useMatch(animesTo as string);
    const favoritesTo = '/favorites';
    const favoritesMatch = useMatch(favoritesTo as string);

    return (
        <header>
            <HeaderBody>
                <CustomLink to={homeTo}>
                    <Logo />
                </CustomLink>
                <HeaderLinkContainer>
                    <HeaderLink>
                        <CustomLink to={homeTo}>
                            {homeMatch ? <HomeActive /> : <Home />}HOME
                        </CustomLink>
                    </HeaderLink>
                    <HeaderLink>
                        <CustomLink to={animesTo}>
                            {animesMatch ? (
                                <PlayCircleActive />
                            ) : (
                                <PlayCircle />
                            )}
                            ANIME
                        </CustomLink>
                    </HeaderLink>
                    <HeaderLink>
                        <CustomLink to="/favorites">
                            {favoritesMatch ? (
                                <HeartActive />
                            ) : (
                                <HeartOutlined fill="#616C7A" />
                            )}
                            FAVORITE
                        </CustomLink>
                    </HeaderLink>
                </HeaderLinkContainer>
                <a href="/">
                    <Search />
                </a>
            </HeaderBody>
        </header>
    );
};
