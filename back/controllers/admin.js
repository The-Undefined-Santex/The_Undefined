const { adminService } = require('../services');

const getAllAdmin = async (req, res) => {
  try {
    const admins = await adminService.getAllAdmins();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los Admins' });
  }
};

const getAdminById = async (req, res) => {
  const adminId = req.params.id;
  try {
    const admin = await adminService.getAdminsById(adminId);
    res.json(admin);
  } catch (error) {
    res.status(404).json({ error: 'Admin no encontrado' });
  }
};

const createAdmin = async (req, res) => {
  const admin = req.body;
  try {
    const newAdmin = await adminService.createAdmin(admin);
    res.json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Admin' });
  }
};

const updateAdmin = async (req, res) => {
  const adminId = req.params.id;
  const admin = req.body;
  try {
    const updatedAdmin = await adminService.updateAdmin(adminId, admin);
    res.json({ message: 'Admin actualizado exitosamente', count: updatedAdmin });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar al Admin' });
  }
};

const deleteAdmin = async (req, res) => {
  const adminId = req.params.id;
  try {
    const deletedAdminCount = await adminService.deleteAdmin(adminId);
    res.json({ message: 'Admin eliminado exitosamente', count: deletedAdminCount });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el Admin' });
  }
};

module.exports = {
  getAllAdmin,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
