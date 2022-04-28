import {
  Box,
  Tooltip,
  Badge,
  TooltipProps,
  tooltipClasses,
  styled,
  useTheme
} from '@mui/material';
import Link from 'src/components/Link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 75px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

function Logo() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <TooltipWrapper title={t('CShare Components')} arrow>
      <LogoWrapper href="/">
        <Image
          src={'/icon-512x512.png'}
          alt={'CShare Logo'}
          width={300}
          height={300}
        />
        <Badge
          sx={{
            '.MuiBadge-badge': {
              fontSize: theme.typography.pxToRem(11),
              right: -2,
              top: 8
            }
          }}
          overlap="circular"
          color="secondary"
          badgeContent="1.0"
        ></Badge>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
