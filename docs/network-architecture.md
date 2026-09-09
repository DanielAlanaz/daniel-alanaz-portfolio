# Connected expertise explorer

`src/content/network.ts` defines stable node IDs, node types, clusters, positions, descriptions, relationships, and destination links. It contains only publishable content. Evidence notes and candidate claims remain in authoring documents. `validateNetwork` rejects duplicate IDs, missing edge references, invalid clusters, and incomplete node content. Tests additionally verify project-route resolution and search/filter behavior.

`network-explorer.tsx` owns view mode, query, cluster, selection, pinning, and long-press handling. It renders HTML controls, an equivalent list, and the persistent detail panel. Hover/focus previews remain available while the visitor moves into the panel. Clicking pins details; Escape or the close control clears them and returns focus to the reset control. Mobile selection brings details into view. The list is included in the initial HTML and remains available without WebGL.

`network-scene.tsx` lazily loads the R3F graph. Node positions are stable. Canvas points and edges provide depth, while projected HTML buttons retain readable labels and keyboard access. Initial geometry contains the full network; primary labels reduce clutter. Expanding all nodes or selecting a cluster exposes domain-level labels. Secondary nodes can always be found through search or list mode.

The camera controller is shared with the hero. The graph opts into viewport fitting and a graph-specific accessibility label. Neither graph auto-rotation nor zoom is enabled. Demand rendering follows control changes; offscreen and hidden-tab rendering is suspended. Geometry is disposed when replaced. The graph and hero have independent visibility observers.

Touch labels use a 450 ms hold threshold and cancel on movement greater than 8 pixels or pointer cancellation. Tap remains sufficient; long press is never required. Browser-level touch behavior has not been verified because the browser automation connection is unavailable.

The graph represents relationships in Daniel's work and knowledge. Its edges are not assertions that all projects share a production architecture. Workflow diagrams on project pages have their own descriptions and limitations.
