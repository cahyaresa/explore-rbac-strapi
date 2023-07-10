/*
 *
 * HomePage
 *
 */

import React from 'react';
import pluginId from '../../pluginId';
import { Box, BaseHeaderLayout, ContentLayout, Flex } from '@strapi/design-system';
const HomePage = () => {
  return (
    <Box>
       <BaseHeaderLayout
        title={pluginId}
        subtitle="Test Plugin"
        as="h2"
      />

      <ContentLayout>
        <Flex direction="column" alignItems="start" gap={8}>
          <Box style={{ alignSelf: 'stretch' }} background="neutral0" padding="32px" hasRadius={true}>
            <Flex direction="column" alignItems="start" gap={6}>
              {/* <Typography variant="alpha">{i18n('plugin.page.homepage.section.quick-actions.title', 'Quick Actions')}
              </Typography> */}
              <p>HAlo in test title section</p>

              <Box>
                <Flex direction="column" alignItems="start" gap={4}>
                  <Flex gap={4}>
                    {/* <ImportButton />
                    <ExportButton availableExportFormats={[dataFormats.JSON_V2]} /> */}
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </ContentLayout>
    </Box>
  );
};

export default HomePage;
