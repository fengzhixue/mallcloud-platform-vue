<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
        <div>
          <i class="el-icon-search"></i>
          <span>筛选搜索</span>
          <el-button
            style="float: right"
            @click="searchMemberList()"
            type="primary"
            size="small">
            查询结果
          </el-button>
        </div>
        <div style="margin-top: 15px">
          <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
            <el-form-item label="输入搜索：">
              <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="会员名称/关键字"></el-input>
            </el-form-item>
          </el-form>
        </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>

    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>

        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="180" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="注册时间" width="180" align="center">
          <template slot-scope="scope">{{scope.row.createTime | formatTime}}</template>
        </el-table-column>
        <el-table-column label="用户昵称" align="center">
          <template slot-scope="scope">{{scope.row.nickname}}</template>
        </el-table-column>
        <el-table-column label="用户账号" width="180" align="center">
          <template slot-scope="scope">{{scope.row.username}}</template>
        </el-table-column>
        <el-table-column label="电话号码" width="180" align="center">
          <template slot-scope="scope">{{scope.row.phone}}</template>
        </el-table-column>
        <el-table-column label="用户余额" width="180" align="center">
          <template slot-scope="scope">
            <p> {{scope.row.blance}}</p>
            <p>
              <el-button
                type="text"
                @click="handleShowVeriyEditDialog(scope.$index, scope.row)">余额记录
              </el-button>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleShowChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status">
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="batch-operate-container">

    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog
      title="余额记录"
      :visible.sync="dialogVisible"
      width="40%">
      <el-table style="width: 100%;margin-top: 20px"
                :data="blanceList"
                border>

        <el-table-column label="用户红包编号" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>

        <el-table-column label="发红包用户的编号" align="center">
          <template slot-scope="scope">{{scope.row.adminId}}</template>
        </el-table-column>
        <el-table-column label="抢红包用户的编号" align="center">
          <template slot-scope="scope">{{scope.row.userId}}</template>
        </el-table-column>
        <el-table-column label="抢到的红包金额" align="center">
          <template slot-scope="scope">{{scope.row.amount}}</template>
        </el-table-column>
        <el-table-column label="抢红包时间" align="center">
          <template slot-scope="scope">{{scope.row.grabTime|formatTime}}</template>
        </el-table-column>
        <el-table-column label="备注" align="center">
          <template slot-scope="scope">{{scope.row.note}}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
  import {formatDate} from '@/utils/date';
  import {fetchList, updateShowStatus, updateFactoryStatus, deleteMember,fetchBlanceList} from '@/api/ums/member'

  export default {
    name: 'memberList',
    data() {
      return {
        dialogVisible:false,
        blanceList:null,
        operates: [
          {
            label: "显示",
            value: "showMember"
          },
          {
            label: "隐藏",
            value: "hideMember"
          }
        ],
        operateType: null,
        listQuery: {
          keyword: null,
          pageNum: 1,
          pageSize: 10
        },
        list: null,
        total: null,
        listLoading: true,
        multipleSelection: []
      }
    },
    created() {
      this.getList();
    },
    filters:{
      formatTime(time) {
        if(time==null||time===''){
          return 'N/A';
        }
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
      verifyStatusFilter(value) {
        if (value === 1) {
          return '消费';
        } else {
          return '收入';
        }
      },
      formatStatus(status){
        for(let i=0;i<defaultStatusOptions.length;i++){
          if(status===defaultStatusOptions[i].value){
            return defaultStatusOptions[i].label;
          }
        }
      },
      formatReturnAmount(row){
        return row.productRealPrice*row.productCount;
      }
    },
    methods: {
      handleShowVeriyEditDialog(index,row){
        this.dialogVisible=true;
        fetchBlanceList(row.id).then(response=>{
          this.blanceList=response.data;
       });
      },

      handleShowChange(index, row) {
        let params = new URLSearchParams();
        params.append('ids', row.id);
        params.append('showStatus', row.showStatus);
        updateShowStatus(params).then(response => {
          this.$message({
          message: '修改成功',
          type: 'success',
          duration: 1000
        });
      });
      },
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.records;
          this.total = response.data.total;
          this.totalPage = response.data.pages;
          this.pageSize = response.data.size;
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleUpdate(index, row) {
        this.$router.push({path: '/ums/updateMember', query: {id: row.id}})
      },
      handleDelete(index, row) {
        this.$confirm('是否要删除该记录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteMember(row.id).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        });
      },
      getProductList(index, row) {
        console.log(index, row);
      },
      getProductCommentList(index, row) {
        console.log(index, row);
      },
      handleFactoryStatusChange(index, row) {
        var data = new URLSearchParams();
        data.append("ids", row.id);
        data.append("factoryStatus", row.factoryStatus);
        updateFactoryStatus(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.factoryStatus === 0) {
            row.factoryStatus = 1;
          } else {
            row.factoryStatus = 0;
          }
        });
      },
      handleShowStatusChange(index, row) {
        let data = new URLSearchParams();
        ;
        data.append("ids", row.id);
        data.append("showStatus", row.showStatus);
        updateShowStatus(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.showStatus === 0) {
            row.showStatus = 1;
          } else {
            row.showStatus = 0;
          }
        });
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        this.getList();
      },
      searchMemberList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
      handleBatchOperate() {
        console.log(this.multipleSelection);
        if (this.multipleSelection < 1) {
          this.$message({
            message: '请选择一条记录',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        let showStatus = 0;
        if (this.operateType === 'showMember') {
          showStatus = 1;
        } else if (this.operateType === 'hideMember') {
          showStatus = 0;
        } else {
          this.$message({
            message: '请选择批量操作类型',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        let ids = [];
        for (let i = 0; i < this.multipleSelection.length; i++) {
          ids.push(this.multipleSelection[i].id);
        }
        let data = new URLSearchParams();
        data.append("ids", ids);
        data.append("showStatus", showStatus);
        updateShowStatus(data).then(response => {
          this.getList();
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      addMember() {
        this.$router.push({path: '/pms/addMember'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


