import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import FunctionsIcon from '@mui/icons-material/Functions';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Link from 'docs/src/modules/components/Link';
import GradientText from 'docs/src/components/typography/GradientText';

export default function PricingWhatToExpect() {
  return (
    <Box
      sx={(theme) => ({
        background: `linear-gradient(0deg, ${
          (theme.vars || theme).palette.grey[50]
        } 0%, #FFFFFF 100%)`,
        ...theme.applyDarkStyles({
          background: `linear-gradient(0deg, ${
            (theme.vars || theme).palette.primaryDark[900]
          } 0%, #001E3C 100%)`,
        }),
      })}
    >
      <Container sx={{ py: { xs: 4, sm: 6, md: 8 } }} id="what-to-expect">
        <Typography
          variant="h2"
          sx={{ maxWidth: { xs: 280, sm: 320, md: 400 }, mb: { xs: 2, sm: 4 } }}
        >
          Key information about <GradientText>the paid plans</GradientText>
        </Typography>
        <Box
          display="grid"
          gap={2}
          sx={{
            gridTemplateColumns: {
              sm: 'repeat(1, minmax(0, 1fr))',
              md: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AcUnitIcon fontSize="small" color="primary" />
                <Typography
                  fontWeight="bold"
                  component="h3"
                  color="text.primary"
                  variant="body2"
                  sx={{ ml: 1 }}
                >
                  Perpetual license type
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" component="div">
                The Perpetual license type offers the right to keep using your licensed versions
                forever in production and development. It comes with 12 months of maintenance (free
                updates & support).
                <br />
                Upon expiration, you can renew your maintenance plan with a discount that depends on
                when you renew:
                <ul>
                  <li>before the suppord expires: 50% discount</li>
                  <li>up to 60 days after the support has expired: 25% discount</li>
                  <li>more than 60 days after the support has expired: 10% discount</li>
                </ul>
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2, height: 'fit-content', gridColumn: 'span 1' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FunctionsIcon fontSize="small" color="primary" />
                <Typography
                  fontWeight="bold"
                  component="h3"
                  color="text.primary"
                  variant="body2"
                  sx={{ ml: 1 }}
                >
                  Required quantity
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                The number of developers licensed must correspond to the maximum number of
                concurrent developers contributing changes to the front-end code of the projects
                that use the software.
                <br />
                You can learn more about this in{' '}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://mui.com/legal/mui-x-eula/#required-quantity-of-licenses"
                >
                  the EULA
                </Link>
                .
              </Typography>
            </Paper>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AllInclusiveOutlinedIcon fontSize="small" color="primary" />
                <Typography
                  fontWeight="bold"
                  component="h3"
                  color="text.primary"
                  variant="body2"
                  sx={{ ml: 1 }}
                >
                  Perpetual vs. Annual license type
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                On both license types, any version released before the end of your license term is
                forever available for applications deployed in production.
                <br />
                The difference regards the right to use the components for development purposes.
                Only the perpetual license type allows you to continue development once your license
                expires.
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <HelpOutlineOutlinedIcon fontSize="small" color="primary" />
                <Typography
                  fontWeight="bold"
                  component="h3"
                  color="text.primary"
                  variant="body2"
                  sx={{ ml: 1 }}
                >
                  Maintenance and support
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                With your purchase, you receive support and access to new versions for the duration
                of your subscription. You can{' '}
                <Link href="https://mui.com/x/introduction/support/#technical-support">
                  learn more about support
                </Link>{' '}
                in the docs. Note that, except for critical issues, such as security flaws, we
                release bug fixes and other improvements on top of the latest version, instead of
                patching older versions.
              </Typography>
            </Paper>
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <ReplayRoundedIcon fontSize="small" color="primary" />
                <Typography
                  fontWeight="bold"
                  component="h3"
                  color="text.primary"
                  variant="body2"
                  sx={{ ml: 1 }}
                >
                  Annual license type
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                The Annual license type requires an active license to use the software in
                development. You will need to renew your license if you wish to continue active
                development after your current license term expires.
                <br />
                <br />
                The license is perpetual in production so you {"don't"} need to renew your license
                if you have stopped active development with the commercial components.
                <br />
                <br />
                You can learn more about this in{' '}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://mui.com/legal/mui-x-eula/#perpetual-in-production"
                >
                  the EULA
                </Link>
                .
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2, height: 'fit-content' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocalOfferOutlinedIcon fontSize="small" color="primary" />
                <Typography
                  fontWeight="bold"
                  component="h3"
                  color="text.primary"
                  variant="body2"
                  sx={{ ml: 1 }}
                >
                  Volume discounts
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                The Pro plan is capped at 10 developers licensed; you do not need to pay for
                additional licenses for more than 10 developers.
                <br />
                You can contact <Link href="mailto:sales@mui.com">sales</Link> for a volume discount
                when licensing over 25 developers under the Premium plan.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
