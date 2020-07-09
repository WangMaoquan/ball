import { createApp } from './src/BallRender';
import App from './src/App';
import { getCanvasContainer } from './src/Ball';
createApp(App).mount(getCanvasContainer());