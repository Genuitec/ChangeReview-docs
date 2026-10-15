// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  crSidebar: [
    {
      type: 'html',
      value: '<div>Getting Started</div>',
      className: 'section-header',
    },
    { type: 'doc', label: 'Overview', id: 'overview' },
    { type: 'doc', label: 'Installation', id: 'install/installation' },
    {
      type: 'html',
      value: '<div>Features</div>',
      className: 'section-header',
    },
    { type: 'doc', label: 'Live Review', id: 'basics/editor-review' },
    { type: 'doc', label: 'Inline Compare', id: 'basics/inline-compare' },
    { type: 'doc', label: 'Time Machine', id: 'basics/time-machine' },
    {
      type: 'html',
      value: '<div>Resources</div>',
      className: 'section-header',
    },
    { type: 'doc', label: 'Getting Help', id: 'getting-help/getting-help' },
    { type: 'doc', label: 'Changelog', id: 'resources/changelog' },
    { type: 'doc', label: 'End User License Agreement', id: 'resources/eula' },
  ],
};

export default sidebars;
