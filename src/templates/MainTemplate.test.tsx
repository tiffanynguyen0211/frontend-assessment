import { create, act } from 'react-test-renderer';
import App from './MainTemplate';

describe('Main App Test', () => {
    it('Matches snapshot on first render', () => {
        const tree = create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Matches snapshot when click to minimise side navigation', () => {
        const component = create(<App />);

        const instance = component.root;
        const schemaButton = instance.findByProps({
            className: 'Button SideNav__Button',
        });

        act(() => {
            schemaButton.props.onClick();
        });
        component.toJSON();
        expect(component).toMatchSnapshot();
    });
});
