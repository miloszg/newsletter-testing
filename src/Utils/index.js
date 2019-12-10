// import checkPropTypes from 'check-prop-types';



export const findByTestArr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
};

// export const checkProps = (component, expectedProps) => {
//     const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
//     return propsError;

// };

