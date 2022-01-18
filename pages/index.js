import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';


// Sets the state for the resource picker
class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker // Resource picker component
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
 
      </Page>
    );
  }p
  handleSelection = (resources) => {
    const idFromResources = resources.selction.map((product) => product.id);
    this.setState({ open: false });
    console.log(idFromResources);
  };
}

export default Index;
