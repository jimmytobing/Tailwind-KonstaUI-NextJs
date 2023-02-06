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

      <Block strong>
        <p>
          Here is your Next.js & Konsta UI app. Let's see what we have here.
        </p>
      </Block>

      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem href="/about/" title="About" />
        <ListItem href="/form/" title="Form" />
      </List>

      <Block strong className="flex space-x-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Block>
    </Page>
  );
}
