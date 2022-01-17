export const OptionSelect: React.FC<any> = ({ handleChange, value }) => {
    return (
        <select onChange={handleChange} name={'Sort by'} value={value}>
            <option value={'score'}>Score</option>
            <option value={'rating'}>Rating</option>
        </select>
    );
};
