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
            link: '/cs-components/contentcontainer/accordion'
          },
          {
            name: 'Alert',
            link: '/cs-components/contentcontainer/alert'
          },
          {
            name: 'Backdrop',
            link: '/cs-components/contentcontainer/backdrop'
          },
          {
            name: 'Banner',
            link: '/cs-components/contentcontainer/banner'
          },
          {
            name: 'Card',
            link: '/cs-components/contentcontainer/card'
          },
          {
            name: 'Carousel',
            link: '/cs-components/contentcontainer/carousel'
          },
          {
            name: 'Dialog',
            link: '/cs-components/contentcontainer/dialog'
          },
          {
            name: 'List',
            link: '/cs-components/contentcontainer/list'
          },
          {
            name: 'Image List',
            link: '/cs-components/contentcontainer/imagelist'
          },
          {
            name: 'Skeleton Screen',
            link: '/cs-components/contentcontainer/skeletonscreen'
          },
          {
            name: 'Snackbar',
            link: '/cs-components/contentcontainer/snackbar'
          },
          {
            name: 'Table',
            link: '/cs-components/contentcontainer/table'
          },
          {
            name: 'Tooltip',
            link: '/cs-components/contentcontainer/tooltip'
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
          {
            name: 'Progress Indicator',
            link: '/content-visualization/loading-progress-indicator'
          },
          {
            name: 'Tags',
            link: '/cs-components/content-visualization/tags'
          }
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
