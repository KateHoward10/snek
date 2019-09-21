import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: repeat(17, 30px);
	grid-template-columns: repeat(17, 30px);
	margin: 50px;
`;

export const Cell = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(50, 168, 82, ${props => (props.number % 2 === 0 ? 0.8 : 0.5)});
`;

export const Body = styled.div`
	width: ${props => (props.head ? 28 : 24)}px;
	height: ${props => (props.head ? 28 : 24)}px;
	border-radius: 50%;
	background-color: blue;
`;

export const Food = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: orange;
`;
