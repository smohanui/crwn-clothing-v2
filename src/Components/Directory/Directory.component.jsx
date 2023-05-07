import CategoryItem from "../Category-Item/Category-Item.component";
import "./Directory.styles.scss";

const DirectoryComponent = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default DirectoryComponent;
