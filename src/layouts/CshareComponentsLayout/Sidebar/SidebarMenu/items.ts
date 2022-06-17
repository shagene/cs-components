import type { ReactNode } from 'react';

import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Components',
    items: [
      {
        name: 'Content Containers ',
        icon: BackupTableTwoToneIcon,
        items: [
          {
            name: 'Accordion',
            link: '/cs-components/content-containers/accordion'
          },
          {
            name: 'Alert',
            link: '/cs-components/content-containers/alert'
          },
          {
            name: 'Backdrop',
            link: '/cs-components/content-containers/backdrop'
          },
          {
            name: 'Banner',
            link: '/cs-components/content-containers/banner'
          },
          {
            name: 'Card',
            link: '/cs-components/content-containers/card'
          },
          {
            name: 'Carousel',
            link: '/cs-components/content-containers/carousel'
          },
          {
            name: 'Dialog',
            link: '/cs-components/content-containers/dialog'
          },
          {
            name: 'List',
            link: '/cs-components/content-containers/list'
          },
          {
            name: 'Image List',
            link: '/cs-components/content-containers/image-list'
          },
          {
            name: 'Skeleton Screen',
            link: '/cs-components/content-containers/skeleton-screen'
          },
          {
            name: 'Snackbar',
            link: '/cs-components/content-containers/snackbar'
          },
          {
            name: 'Table',
            link: '/cs-components/content-containers/table'
          },
          {
            name: 'Tooltip',
            link: '/cs-components/content-containers/tooltip'
          },
        ]
      },
      {
        name: 'Content Visualization',
        icon: SmartToyTwoToneIcon,
        items: [
          {
            name: 'Avatar',
            link: '/cs-components/content-visualization/avatar'
          },
          {
            name: 'Badge',
            link: '/cs-components/content-visualization/badge'
          },
          {
            name: 'Loading / Progress Indicator',
            link: '/cs-components/content-visualization/loading-progress-indicator'
          },
        ]
      },
      {
        name: 'Controls',
        icon: HealthAndSafetyTwoToneIcon,
        items: [
          {
            name: 'Button',
            link: '/cs-components/controls/button'
          },
          {
            name: 'Button Group',
            link: '/cs-components/controls/buttongroup'
          },
          {
            name: 'Button Toggle',
            link: '/cs-components/controls/buttontoggle'
          },
          {
            name: 'Checkbox',
            link: '/cs-components/controls/checkbox'
          },
          {
            name: 'Chip',
            link: '/cs-components/controls/chip'
          },
          {
            name: 'Date Time Picker',
            link: '/cs-components/controls/datetimepicker'
          },
          {
            name: 'Dropdown',
            link: '/cs-components/controls/dropdown'
          },
          {
            name: 'Floating Action Button',
            link: '/cs-components/controls/floatingactionbutton'
          },
          {
            name: 'Link',
            link: '/cs-components/controls/link'
          },
          {
            name: 'Paginator',
            link: '/cs-components/controls/paginator'
          },
          {
            name: 'Radio Button',
            link: '/cs-components/controls/radiobutton'
          },
          {
            name: 'Search  (To Do)',
            link: '/cs-components/controls/search'
          },
          {
            name: 'Slider',
            link: '/cs-components/controls/slider'
          },
          {
            name: 'Text Area  (To Do)',
            link: '/cs-components/controls/textarea'
          },
          {
            name: 'Text Fiel  (To Do)d',
            link: '/cs-components/controls/textfield'
          },
          {
            name: 'Toggle / Switch  (To Do)',
            link: '/cs-components/controls/toggle'
          }
        ]
      },
      {
        name: 'Navigation Controls',
        icon: AnalyticsTwoToneIcon,
        items: [
          {
            name: 'App Bar',
            link: '/cs-components/navigation-controls/appbar'
          },
          {
            name: 'Menus',
            link: '/cs-components/navigation-controls/menus'
          },
          {
            name: 'Navigation Drawer',
            link: '/cs-components/navigation-controls/navigationdrawer'
          },
          {
            name: 'Navigation Rail  (To Do)',
            link: '/cs-components/navigation-controls/navigationrail'
          },
          {
            name: 'Section Index  (In Progress)',
            link: '/cs-components/navigation-controls/sectionindex'
          },
          {
            name: 'Tabs',
            link: '/cs-components/navigation-controls/tabs'
          },
          {
            name: 'Toolbar (To Do)',
            link: '/cs-components/navigation-controls/toolbar'
          },
          {
            name: 'Stepper / Wizard',
            link: '/cs-components/navigation-controls/stepper'
          },
        ]
      }
    ]
  },
  
];

export default menuItems;
