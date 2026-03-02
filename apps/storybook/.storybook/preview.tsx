import React, { useContext } from 'react';
import type { Preview } from '@storybook/react-vite';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Canvas,
  DocsContext,
} from '@storybook/addon-docs/blocks';
import { addons } from 'storybook/preview-api';
import '@rgrmdesign/ds-styles';

function StoriesWithLinks() {
  const context = useContext(DocsContext);
  const stories = context.componentStories().slice(1);

  if (!stories.length) return null;

  return (
    <>
      <h2>Stories</h2>
      {stories.map((story) => (
        <div key={story.id} style={{ marginBottom: '2rem' }}>
          <h3 id={story.id}>{story.name}</h3>
          <Canvas
            of={story.moduleExport}
            sourceState="none"
            additionalActions={[
              {
                title: 'Bekijk in Canvas →',
                onClick: () => {
                  addons.getChannel().emit('selectStory', { storyId: story.id });
                },
              },
            ]}
          />
        </div>
      ))}
    </>
  );
}

const preview: Preview = {
  parameters: {
    controls: { matchers: ['color', 'date', 'boolean', 'text'] },
    docs: {
      codePanel: true,
      canvas: { sourceState: 'none' },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <StoriesWithLinks />
        </>
      ),
    },
    html: {
      removeEmptyComments: true,
      highlighter: {
        showLineNumbers: false,
        wrapLines: true,
      },
    },
  },
};

export default preview;
