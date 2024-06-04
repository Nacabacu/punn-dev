import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkWrapper from '@/components/linkWrapper';

export default function Home() {
  return (
    <>
      <div className="font-extrabold text-4xl">Punn Nararatwong</div>
      <div className="text-xl pt-4">a full stack web developer</div>
      <div className="text-xl pt-4 space-x-12">
        <LinkWrapper url="https://github.com/Nacabacu">
          <GitHubIcon />
        </LinkWrapper>
        <LinkWrapper url="https://www.instagram.com/p.nacabacu">
          <InstagramIcon />
        </LinkWrapper>
        <LinkWrapper url="https://th.linkedin.com/in/punn-nararatwong-4a7b5814a">
          <LinkedInIcon />
        </LinkWrapper>
      </div>
    </>
  );
}
