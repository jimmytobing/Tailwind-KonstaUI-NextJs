// Konsta UI components
import {
  Block,
  BlockTitle,
  Button,
  Page,
  Navbar,
  NavbarBackLink,
  Badge,
  Icon,
  Link,
  List,
  ListItem,
  Tabbar,
  TabbarLink,
} from 'konsta/react';

import DemoIcon from '../components/DemoIcon';

export default function Home() {
  return (
    <Page>
      <Navbar
        title="Asli jim"
        right={
          <Link navbar iconOnly>
            <Icon
              ios={<DemoIcon className="w-7 h-7" />}
              material={<DemoIcon className="w-6 h-6" />}
              badge="5"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          </Link>
        }
      />

      <Tabbar labels icons className="left-0 bottom-0 fixed">
        <TabbarLink
          active
          icon={
            <Icon
              ios={<DemoIcon className="w-7 h-7" />}
              material={<DemoIcon className="w-6 h-6" />}
              badge="5"
              badgeColors={{ bg: 'bg-green-500' }}
            />
          }
          label="Inbox"
        />
        <TabbarLink
          icon={
            <Icon
              ios={<DemoIcon className="w-7 h-7" />}
              material={<DemoIcon className="w-6 h-6" />}
              badge="7"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Calendar"
        />
        <TabbarLink
          icon={
            <Icon
              ios={<DemoIcon className="w-7 h-7" />}
              material={<DemoIcon className="w-6 h-6" />}
              badge="1"
              badgeColors={{ bg: 'bg-red-500' }}
            />
          }
          label="Upload"
        />
      </Tabbar>

      <Block strong>
        <p>Selamat Datang Jimmy</p>
      </Block>

      <BlockTitle>Navigation</BlockTitle>

      <List strong inset>
        <ListItem
          media={<DemoIcon />}
          title="Foo Bar"
          after={<Badge colors={{ bg: 'bg-gray-500' }}>0</Badge>}
        />

        <ListItem
          media={<DemoIcon />}
          title="Ivan Petrov"
          after={<Badge>CEO</Badge>}
        />

        <ListItem
          media={<DemoIcon />}
          title="John Doe"
          after={<Badge colors={{ bg: 'bg-green-500' }}>5</Badge>}
        />

        <ListItem
          media={<DemoIcon />}
          title="Jane Doe"
          after={<Badge colors={{ bg: 'bg-yellow-500' }}>NEW</Badge>}
        />
      </List>

      <Block strong className="flex space-x-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Block>
    </Page>
  );
}
