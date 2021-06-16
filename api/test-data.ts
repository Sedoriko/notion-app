export const createUser = () => {
  return {
    username: "Anonymous",
    created_at: Date.now(),
    modified_at: null,
    deleted_at: null,
  };
};

export const createPage = (title: string, userId = null, iconPath = null) => {
  return {
    title: title ? title : "New page",
    user_id: userId,
    modified_info_id: 10,
    icon_path: iconPath,
    created_at: Date.now(),
    modified_at: null,
    deleted_at: null,
  };
};