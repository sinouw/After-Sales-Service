using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class creatingmodels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reclamation_Service_ServiceId",
                table: "Reclamation");

            migrationBuilder.DropForeignKey(
                name: "FK_Service_Entreprise_EntrepriseId",
                table: "Service");

            migrationBuilder.DropIndex(
                name: "IX_Service_EntrepriseId",
                table: "Service");

            migrationBuilder.DropIndex(
                name: "IX_Reclamation_ServiceId",
                table: "Reclamation");

            migrationBuilder.DropColumn(
                name: "EntrepriseId",
                table: "Service");

            migrationBuilder.DropColumn(
                name: "ServiceId",
                table: "Reclamation");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "EntrepriseId",
                table: "Service",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ServiceId",
                table: "Reclamation",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Service_EntrepriseId",
                table: "Service",
                column: "EntrepriseId");

            migrationBuilder.CreateIndex(
                name: "IX_Reclamation_ServiceId",
                table: "Reclamation",
                column: "ServiceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reclamation_Service_ServiceId",
                table: "Reclamation",
                column: "ServiceId",
                principalTable: "Service",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Service_Entreprise_EntrepriseId",
                table: "Service",
                column: "EntrepriseId",
                principalTable: "Entreprise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
