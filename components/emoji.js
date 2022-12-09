import styled from 'styled-components';

const StyledEmoji = styled.span`
    width:  ${({ theme }) => theme.medium}
`;

const Emoji = props => (
    <StyledEmoji
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >


        {props.symbol}
    </StyledEmoji>
);
export default Emoji;